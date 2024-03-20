const renderPage = () => {
    return `
    <htmllang=”pl”>
            <head>
                <metacharset="UTF-8">
                <metaname="viewport"content="width=device-width, initial-scale=1.0">
                <title>HOME.js</title>
                <body>
                <form action="/student" method="post">
                    <h1>Form</h1>
                    <input placeholder="name" name="name" type="text">
                    <input placeholder="age" name="age" type="text">
                    <select name="gender">
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                    </select>
                    <input placeholder="albom number" name="code" type="number">
                    <input placeholder="direction" name="studyField" type="text">
                    <button type="submit">Submit</button>
                </form>
                    
                </body>
            </head>
        </html>
    `
}




module.exports = { renderPage };