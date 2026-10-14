function Languages({ languages }) {
    return (
        <section id="languages">
            <h2>Мови</h2>
            <ul>
                {languages.map((lang, index) => (
                    <li key={index}>
                        <b>{lang.name}:</b> {lang.level}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Languages;