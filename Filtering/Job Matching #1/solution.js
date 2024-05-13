function match(candidate, job) {
  if (candidate.minSalary === undefined || job.maxSalary === undefined) {
    throw new Error(
      "Both candidate's minimum salary and job's maximum salary must be provided."
    );
  }

  const adjustedMinSalary = candidate.minSalary * 0.9;

  return adjustedMinSalary <= job.maxSalary;
}
