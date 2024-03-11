const http = require("http");

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

const APIKey = process.env.weatherApiKey;

const urlData = (lat, lon) =>
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`;

const urlGeo = (city) =>
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIKey}`;

const Geo = (city) =>
    http
        .get(urlGeo(city), (res) => {
            const { statusCode, statusMessage } = res;
            if (statusCode !== 200) {
                console.log(`statusCode: ${statusCode}, statusMessage ${statusMessage}`);
                return;
            }

            let data = "";
            9;
            res.setEncoding("utf8")
                .on("data", (x) => (data += x))
                .on("end", () => {
                    let parsed = JSON.parse(data)[0];
                    Data(parsed.lat, parsed.lon);
                });
        })
        .on("error", (err) => {
            console.error(err);
        });

const Data = (lat, lon) =>
    http
        .get(urlData(lat, lon), (res) => {
            const { statusCode, statusMessage } = res;
            if (statusCode !== 200) {
                console.log(`statusCode: ${statusCode}, statusMessage ${statusMessage}`);
                return;
            }

            let data = "";
            res.setEncoding("utf8")
                .on("data", (x) => (data += x))
                .on("end", () => {
                    let parsed = JSON.parse(data);
                    console.log(
                        `Температура воздуха: ${Math.round(
                            parsed.main.temp - 273.15
                        )}, по ощущениям ${Math.round(parsed.main.feels_like - 273.15)}`
                    );
                });
        })
        .on("error", (err) => {
            console.error(err);
        });

rl.question("В каком городе котите узнать температуру? ", (answer) => {
    Geo(answer);
    rl.close();
});
