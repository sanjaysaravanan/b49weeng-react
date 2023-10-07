import PropTypes from 'prop-types';

const data = [
  { 
    backgroundImage: 'https://s3.us.cloud-object-storage.appdomain.cloud/developer/default/blogs/introducing-the-ibm-semeru-runtimes/card.jpg',
    title: 'Introducing the no-cost IBM Semeru Runtimes to develop and run Java applications',
    description: 'Build and deploy Java apps that start quickly, deliver great performance, and use less memory.',
    tags: ['Featured', 'Blog Post'],
  },
  {
    backgroundColor: '#0f62fe',
    title: 'Getting started with Java',
    tags: [],
  },
  {
    thumbnail: 'https://s3.us.cloud-object-storage.appdomain.cloud/developer/default/tutorials/get-your-java-microservice-up-and-running-workshop/card.jpg',
    title: 'Get your Java microservice up and running',
    tags: ['Featured', 'Tutorials'],
  },
  {
    title: 'Achieve Rapid Iterative Cloud Native Java',
    tags: ['Featured', 'Tutorials'],
  },
];

const CardLink = ({ 
  backgroundImage, 
  backgroundColor, 
  thumbnail, 
  title,
  description,
  tags,
}) => {
  return (
    <div
      style={{
        width: '300px',
        height: '300px',
        margin: 8,
        padding: '16px',
        border: '1px solid',
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundColor: backgroundColor ? backgroundColor : '#fff'
      }}
    >
      {thumbnail && (<img
        alt={title}
        style={{
          height: '150px',
          width: '100%'
        }}
        src={thumbnail}
      />)}
      <p>{tags.join(' | ')}</p>
      <h5>{title}</h5>
      {description && (
        <p>{description}</p>
      )}
      <a href="https://google.com" style={{ float: 'right' }} >
        <i className="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  )
};

CardLink.propTypes = {
  backgroundImage: PropTypes.string, // Optional
  backgroundColor: PropTypes.string, // Optional
  thumbnail: PropTypes.string, // Optional
  title: PropTypes.string.isRequired, // Must Have prop
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string), // array of strings
}

const ReusablePage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}
    >
      {data.map((details) => (
        <CardLink 
          // backgroundColor={details.backgroundColor}
          // backgroundImage={details.backgroundImage}
          // description={details.description}
          // tags={details.tags}
          // thumbnail={details.thumbnail}
          // title={details.title}
          {...details}
          key={details.title}
        />
      ))}
    </div>
  );
};

export default ReusablePage;