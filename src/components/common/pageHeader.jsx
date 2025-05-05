function PageHeader({
  title,
  description,
  classNameTitle,
  classNameDescription,
}) {
  return (
    <div className="container">
      <h1 className={classNameTitle}>{title}</h1>
      <p className={classNameDescription}>{description}</p>
    </div>
  );
}

export default PageHeader;
