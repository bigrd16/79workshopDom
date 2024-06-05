/* Reset CSS */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
}

header {
    background-color: #f0f0f0;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav ul {
    list-style-type: none;
}

nav ul li {
    display: inline-block;
    margin-right: 20px;
}

section {
    padding: 50px 0;
    text-align: center;
}

.logo {
    font-size: 24px;
    font-weight: bold;
}

.country-select select {
    margin-top: 20px;
}

.specialists-select select {
    margin-top: 20px;
}

.background-logo {
    background-image: url('path/to/background-image.jpg');
    background-size: cover;
    background-position: center;
    height: 200px;
}

.leader-countries {
    margin-top: 20px;
}

.patients-stats, .visits-stats, .doctors-stats {
    font-size: 24px;
    font-weight: bold;
    display: inline-block;
    margin: 0 10px;
}

.team-locations {
    margin-top: 20px;
}

.see-openings {
    display: block;
    margin-top: 20px;
}

footer {
    background-color: #f0f0f0;
    padding: 20px;
    text-align: center;
}
