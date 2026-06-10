export function getAnnotationsForStep(stepIndex, annotations, stepAnnotations) {
  const keys = stepAnnotations[stepIndex] ?? [];
  return keys.map((k) => ({ id: k, ...annotations[k] })).filter(Boolean);
}
