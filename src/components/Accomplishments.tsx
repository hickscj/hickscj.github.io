


export const Accomplishments = () => {
    const awards = [
        {
            title: "",
            description: "",
            imageUrl: "../resources/Copper_award_from_James.png"
        },
        {
            title: "",
            description: "",
            imageUrl: "../resources/ecard-from-Rian.png"
        },
        {
            title: "",
            description: "",
            imageUrl: "../resources/disruptive-tech-award-blurb.png"
        },
        {
            title: "",
            description: "",
            imageUrl: "../resources/workday-feedback.png"
        },
    ];

    return (
        <div>
            <h3>Awards</h3>
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