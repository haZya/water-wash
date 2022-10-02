import { NextApiRequest, NextApiResponse } from 'next';

const revalidatePageTypes = [
  'home-page',
  'about-us-page',
  'contact-us-page',
  'commercial-page',
  'residential-page',
];
const getPathForForm = (type: 'Quote Form' | 'Contact Form' | 'Commercial Quote Form') =>
  type === 'Quote Form'
    ? ''
    : type === 'Contact Form'
    ? 'contact-us'
    : type === 'Commercial Quote Form' && 'commercial';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check for secret to confirm this is a valid request
  if (req.headers['verification-key'] !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    const path =
      '/' +
      (revalidatePageTypes.includes(req.body.model)
        ? req.body.entry.slug
        : req.body.model === 'form-field' && getPathForForm(req.body.entry.type));

    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    await res.revalidate(path);
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating');
  }
}
