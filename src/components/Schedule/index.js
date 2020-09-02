import React from 'react';
import './Schedule.css';
import LightningSVG from '../LightningSVG';

const Schedule = () => (
  <div id="schedule" className="Schedule">
    <p className="Schedule-Title">Schedule</p>
    <div className="Lightnings-Left">
      <LightningSVG />
      <LightningSVG />
      <LightningSVG />
      <LightningSVG />
      <LightningSVG />
    </div>
    <div className="Schedule-Wrapper">
      <div className="Day">
        <h2>Day 1</h2>
        <table>
          <tbody>
            <tr>
              <th>09:00</th>
              <td colSpan="4" rowSpan="4" className="is-official-program">
                Official welcome to Official Day 1{' '}
                <span>online (link TBA)</span>
              </td>
            </tr>
            <tr>
              <th>09:30</th>
            </tr>
            <tr>
              <th>10:00</th>
            </tr>
            <tr>
              <th>10:30</th>
            </tr>
            <tr>
              <th>11:00</th>
              <td rowSpan="6" className="is-hacking">
                Hack, hack, hack
              </td>
            </tr>
            <tr>
              <th>11:30</th>
            </tr>
            <tr>
              <th>12:00</th>
            </tr>
            <tr>
              <th>12:30</th>
            </tr>
            <tr>
              <th>13:00</th>
            </tr>
            <tr>
              <th>13:30</th>
            </tr>
            <tr>
              <th>14:00</th>
              <td colSpan="4" rowSpan="2" className="is-official-program">
                Virtual coffee & check in <span>online (link TBA)</span>
              </td>
            </tr>
            <tr>
              <th>14:30</th>
            </tr>
            <tr>
              <th>15:00</th>
              <td rowSpan="15" className="is-hacking">
                Hack, hack, hack
              </td>
            </tr>
            <tr>
              <th>15:30</th>
            </tr>
            <tr>
              <th>16:00</th>
            </tr>
            <tr>
              <th>16:15</th>
            </tr>
            <tr>
              <th>16:30</th>
            </tr>
            <tr>
              <th>17:00</th>
            </tr>
            <tr>
              <th>17:15</th>
            </tr>
            <tr>
              <th>17:30</th>
            </tr>
            <tr>
              <th>18:00</th>
            </tr>
            <tr>
              <th>18:30</th>
            </tr>
            <tr>
              <th>19:00</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="Day">
        <h2>Day 2</h2>
        <table>
          <tbody>
            <tr>
              <th>09:00</th>
              <td colSpan="4" rowSpan="2" className="is-official-program">
                Welcome to Day 2 <span>online (link TBA)</span>
              </td>
            </tr>
            <tr>
              <th>09:30</th>
            </tr>
            <tr>
              <th>10:00</th>
              <td rowSpan="12" className="is-hacking">
                Hack, hack, hack
              </td>
            </tr>
            <tr>
              <th>10:30</th>
            </tr>
            <tr>
              <th>11:00</th>
            </tr>
            <tr>
              <th>11:30</th>
            </tr>
            <tr>
              <th>12:00</th>
            </tr>
            <tr>
              <th>12:30</th>
            </tr>
            <tr>
              <th>13:00</th>
            </tr>
            <tr>
              <th>13:30</th>
            </tr>
            <tr>
              <th>14:00</th>
            </tr>
            <tr>
              <th>14:30</th>
            </tr>
            <tr>
              <th>15:00</th>
            </tr>
            <tr>
              <th>15:30</th>
            </tr>
            <tr>
              <th>16:00</th>
              <td colSpan="4" rowSpan="1" className="is-official-program">
                Stop coding!
              </td>
            </tr>
            <tr>
              <th>16:15</th>
              <td colSpan="4" rowSpan="2" className="is-official-program">
                Demos
              </td>
            </tr>
            <tr>
              <th>16:30</th>
            </tr>
            <tr>
              <th>17:00</th>
              <td colSpan="4" rowSpan="1" className="is-official-program">
                Voting online (link tba)
              </td>
            </tr>
            <tr>
              <th>17:15</th>
              <td colSpan="4" rowSpan="4" className="is-official-program">
                Announce winners & ending ceremony{' '}
                <span>online (link tba)</span>
              </td>
            </tr>
            <tr>
              <th>17:30</th>
            </tr>
            <tr>
              <th>18:00</th>
            </tr>
            <tr>
              <th>18:30</th>
            </tr>
            <tr>
              <th>19:00</th>
              <td colSpan="4" rowSpan="2" className="is-official-program">
                Offline afterparty for those who want to join{' '}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="Lightnings-Right">
      <LightningSVG />
      <LightningSVG />
      <LightningSVG />
      <LightningSVG />
      <LightningSVG />
    </div>
  </div>
);

export default Schedule;
