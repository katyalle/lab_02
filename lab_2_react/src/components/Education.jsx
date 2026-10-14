function Education({ items }) {
    return (
        <section id="education">
            <h2>Освіта</h2>
            {items.map((item, index) => (
                <article key={index}>
                    <p><b>{item.university}</b></p>
                    <p>{item.specialty}</p>
                    <p>{item.period}</p>
                </article>
            ))}
        </section>
    );
}

export default Education;