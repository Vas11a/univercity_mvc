
const renderPage = (formData) => {
    const { name, age, gender, code, studyField } = formData;
    const profileInfo = `
        <html lang="pl">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Student Profile</title>
            </head>
            <body>
                <h1>Student profile</h1>
                <p>Album Number: ${code}</p>
                <p>Name: ${name}</p>
                <p>Age: ${age}</p>
                <p>Gender: ${gender}</p>
                <p>Study Field: ${studyField}</p>
            </body>
        </html>
    `;
    return profileInfo;
}

module.exports = { renderPage };
