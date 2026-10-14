function Projects({ title, list }) {
    return (
        <section id="projects">
            <h2>Навчальні проєкти</h2>
            <h3>{title}</h3>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </section>
    );
}

export default Projects;