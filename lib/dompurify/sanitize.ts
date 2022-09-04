import DOMPurify from 'dompurify';

function sanitize(content: string) {
  return typeof window !== 'undefined' ? DOMPurify.sanitize(content) : content;
}

export default sanitize;
