


export const Accomplishments = () => {
  const awards = [
    {
      title: "",
      description: "",
      imageUrl: "../resources/copper-award-1.png"
    },
    {
      title: "",
      description: "",
      imageUrl: "../resources/copper-award-2.png"
    },
    {
      title: "",
      description: "",
      imageUrl: "../resources/ecard-from-Rian.png"
    },
    {
      title: "",
      description: "",
      imageUrl: "../resources/disruptive-tech-award-blurb-sm.png"
    },
    {
      title: "",
      description: "",
      imageUrl: "../resources/workday-feedback-sm.png"
    },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold pb-5">Awards and Feedback</h3>
      <ul>
        {awards.map((award, index) => (
          <li key={index}>
            <h4>{award.title}</h4>
            <p>{award.description}</p>
            <img src={award.imageUrl} alt={award.title} />
          </li>
        ))}
      </ul>
    </div>
  )
}
