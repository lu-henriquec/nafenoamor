export default function areEqual (prevProps, nextProps, field) {
  return prevProps[field] === nextProps[field];
}