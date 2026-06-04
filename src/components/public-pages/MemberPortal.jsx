import { useEffect, useMemo, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  serverTimestamp,
  Timestamp,
  where,
} from "firebase/firestore";

import db from "../../firebase";

import "../../styles/member-portal.css";

const PORTAL_PASSWORD =
  import.meta.env.VITE_MEMBER_PORTAL_PASSWORD || "acetamu123";
const JOB_DURATION_DAYS = 90;

const emptyJob = {
  company: "",
  title: "",
  type: "Internship",
  location: "",
  deadline: "",
  email: "",
  phone: "",
  postedBy: "",
  description: "",
};

const MemberPortal = () => {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(
    sessionStorage.getItem("acePortalUnlocked") === "true"
  );
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("All");
  const [newJob, setNewJob] = useState(emptyJob);
  const [isPostingJob, setIsPostingJob] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [isLoadingJobs, setIsLoadingJobs] = useState(true);
  const [isSavingJob, setIsSavingJob] = useState(false);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    if (!isUnlocked) {
      return undefined;
    }

    const activeJobsQuery = query(
      collection(db, "jobs"),
      where("expiresAt", ">", Timestamp.now())
    );

    const unsubscribe = onSnapshot(
      activeJobsQuery,
      (snapshot) => {
        const activeJobs = snapshot.docs
          .map((document) => ({
            id: document.id,
            ...document.data(),
          }))
          .sort((a, b) => {
            const firstDate = a.createdAt?.toMillis?.() || 0;
            const secondDate = b.createdAt?.toMillis?.() || 0;
            return secondDate - firstDate;
          });

        setJobs(activeJobs);
        setIsLoadingJobs(false);
        setLoadError("");
      },
      () => {
        setLoadError("Could not load jobs. Please try again later.");
        setIsLoadingJobs(false);
      }
    );

    return unsubscribe;
  }, [isUnlocked]);

  const jobTypes = useMemo(
    () => ["All", ...new Set(jobs.map((job) => job.type))],
    [jobs]
  );

  const visibleJobs =
    filter === "All"
      ? jobs
      : jobs.filter((job) => job.type === filter);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === PORTAL_PASSWORD) {
      sessionStorage.setItem("acePortalUnlocked", "true");
      setIsUnlocked(true);
      setError("");
      return;
    }

    setError("Incorrect password");
  };

  const handleJobChange = (event) => {
    const { name, value } = event.target;
    setNewJob((job) => ({ ...job, [name]: value }));
    if (name === "email" || name === "phone") {
      setError("");
    }
  };

  const handleJobSubmit = (event) => {
    event.preventDefault();

    if (!newJob.email.trim() && !newJob.phone.trim()) {
      setError("Add an email or phone number before posting");
      return;
    }

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + JOB_DURATION_DAYS);

    setIsSavingJob(true);
    addDoc(collection(db, "jobs"), {
      ...newJob,
      company: newJob.company || "ACE Referral",
      deadline: newJob.deadline || "Rolling",
      location: newJob.location || "TBD",
      description: newJob.description || "Contact the poster for details.",
      createdAt: serverTimestamp(),
      expiresAt: Timestamp.fromDate(expirationDate),
    })
      .then(() => {
        setNewJob(emptyJob);
        setIsPostingJob(false);
        setFilter("All");
        setError("");
      })
      .catch(() => {
        setError("Could not post this job. Please try again.");
      })
      .finally(() => {
        setIsSavingJob(false);
      });
  };

  if (!isUnlocked) {
    return (
      <div className="portal-content portal-login">
        <h1>ACE Member Portal</h1>
        <p>Enter the member password to view internal opportunities.</p>
        <form className="portal-login-form" onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            aria-label="Member portal password"
          />
          <button type="submit">Enter</button>
        </form>
        {error && <p className="portal-error">{error}</p>}
      </div>
    );
  }

  return (
    <div className="portal-content">
      <div className="portal-header">
        <div>
          <h1>ACE Job Board</h1>
          <p>Alumni referrals, internships, full-time roles, and member leads.</p>
        </div>
        <button
          type="button"
          className="portal-signout"
          onClick={() => {
            sessionStorage.removeItem("acePortalUnlocked");
            setIsUnlocked(false);
            setPassword("");
          }}
        >
          Lock
        </button>
      </div>

      <div className="portal-toolbar">
        <div className="portal-filters">
          {jobTypes.map((type) => (
            <button
              key={type}
              type="button"
              className={filter === type ? "active" : ""}
              onClick={() => setFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="post-job-toggle"
          onClick={() => setIsPostingJob((isOpen) => !isOpen)}
        >
          {isPostingJob ? "Cancel" : "Post a Job"}
        </button>
      </div>

      {isPostingJob && (
        <section className="post-job-panel">
          <div className="post-job-heading">
            <h2>Post Opportunity</h2>
            <p>Only role title and contact are required. Add more if you have it.</p>
          </div>
          <form className="post-job-form" onSubmit={handleJobSubmit}>
            <input
              name="title"
              value={newJob.title}
              onChange={handleJobChange}
              placeholder="Role title"
              required
            />
            <input
              name="email"
              value={newJob.email}
              onChange={handleJobChange}
              placeholder="Contact email"
              type="email"
            />
            <input
              name="phone"
              value={newJob.phone}
              onChange={handleJobChange}
              placeholder="Phone number"
              type="tel"
            />
            <input
              name="company"
              value={newJob.company}
              onChange={handleJobChange}
              placeholder="Company"
            />
            <input
              name="postedBy"
              value={newJob.postedBy}
              onChange={handleJobChange}
              placeholder="Posted by"
            />
            <select name="type" value={newJob.type} onChange={handleJobChange}>
              <option>Internship</option>
              <option>Full-time</option>
              <option>Co-op</option>
              <option>Research</option>
              <option>Referral</option>
            </select>
            <input
              name="location"
              value={newJob.location}
              onChange={handleJobChange}
              placeholder="Location"
            />
            <input
              name="deadline"
              value={newJob.deadline}
              onChange={handleJobChange}
              placeholder="Deadline"
            />
            <textarea
              name="description"
              value={newJob.description}
              onChange={handleJobChange}
              placeholder="Optional description, apply link, or referral notes"
            />
            <button type="submit" disabled={isSavingJob}>
              {isSavingJob ? "Posting..." : "Post Job"}
            </button>
            {error && <p className="portal-error post-job-error">{error}</p>}
          </form>
        </section>
      )}

      {loadError && <p className="portal-error">{loadError}</p>}

      {!isPostingJob && isLoadingJobs && (
        <div className="empty-jobs">
          <h2>Loading jobs...</h2>
        </div>
      )}

      {!isPostingJob && !isLoadingJobs && jobs.length === 0 && (
        <div className="empty-jobs">
          <h2>No jobs posted yet</h2>
          <p>Be the first to share an opportunity with ACE members.</p>
          <button type="button" onClick={() => setIsPostingJob(true)}>
            Post a Job
          </button>
        </div>
      )}

      <div className="job-list">
        {visibleJobs.map((job) => (
          <article className="job-card" key={job.id}>
            <div className="job-card-header">
              <div>
                <h2>{job.title}</h2>
                <p>{job.company}</p>
              </div>
              <span>{job.type}</span>
            </div>
            <p>{job.description}</p>
            <div className="job-meta">
              {job.postedBy && <span>Posted by: {job.postedBy}</span>}
              <span>{job.location}</span>
              <span>Deadline: {job.deadline}</span>
              {job.email && <a href={`mailto:${job.email}`}>{job.email}</a>}
              {job.phone && <a href={`tel:${job.phone}`}>{job.phone}</a>}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default MemberPortal;
