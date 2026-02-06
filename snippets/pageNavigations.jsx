export const PageNav = ({ title, link, title2, link2 }) => (
  <div className="flex gap-4 mb-6">
    <a href={link}>{title}</a>
    <a href={link2}>{title2}</a>
  </div>
);
