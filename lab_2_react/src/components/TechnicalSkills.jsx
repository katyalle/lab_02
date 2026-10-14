function TechnicalSkills({ skills }) {
    return (
        <section id="technical-skills">
            <h2>Технічні навички</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
}

export default TechnicalSkills;