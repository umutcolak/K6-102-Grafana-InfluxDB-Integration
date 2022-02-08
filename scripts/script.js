import http from 'k6/http';
import {sleep} from 'k6';

const payload = JSON.parse(open('payload.json'));
sleep(3);
export let options = {
    rps: 10,
    stages: [
        {duration: "5s", target: 5}
    ]
};
export default function () {
    const url = 'http://endpoint';
    const resp = http.post(url, payload[1]);
    console.log(`status: "${resp.status}"`);
}