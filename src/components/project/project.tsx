import "./project.css";
const Project = ({
  name,
  desc,
  tags,
  href,
  imageUrl,
}: {
  name: string;
  desc: string;
  tags: string[];
  href: string;
  imageUrl: string;
}) => {
  return (
    <div>
      <div className="project">
        <div className="background"></div>
        <img className="image" src={imageUrl} alt="" />
        <div>
          <h3>
            <a href={href} target="_blank">
              <div className="name-wrapper">
                <span>{name}</span>
                <span className="slash-one">/</span>
                <span className="slash-two">/</span>
              </div>
              <span className="link-background"></span>
            </a>
          </h3>
          <p>{desc}</p>

          <ul className="tags">
            {tags.map((tag) => (
              <li>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
