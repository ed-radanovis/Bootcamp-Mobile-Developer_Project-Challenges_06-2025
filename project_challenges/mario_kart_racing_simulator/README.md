<h1>Felipão's Project Challenge: Mario Kart . JS</h1>

  <table>
        <tr>
            <td>
                <img src="./assets/header.gif" alt="Mario Kart" width="200">
            </td>
            <td>
                <b>Objective:</b>
                <p>Mario Kart is a racing game series developed and published by Nintendo. Our challenge will be to create a video game logic to simulate Mario Kart racing, taking into account the rules and mechanics below.</p>
            </td>
        </tr>
    </table>

<h2>Players</h2>
      <table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Mario</p>
                <img src="./assets/mario.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 4</p>
<p>Maneuverability: 3</p>
<p>Power: 3</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Peach</p>
                <img src="./assets/peach.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 3</p>
<p>Maneuverability: 4</p>
<p>Power: 2</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Yoshi</p>
                <img src="./assets/yoshi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 2</p>
<p>Maneuverability: 4</p>
<p>Power: 3</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Bowser</p>
                <img src="./assets/bowser.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
               <p>Speed: 5</p>
<p>Maneuverability: 2</p>
<p>Power: 5</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Luigi</p>
                <img src="./assets/luigi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 3</p>
<p>Maneuverability: 4</p>
<p>Power: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Donkey Kong</p>
                <img src="./assets/dk.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 2</p>
<p>Maneuverability: 2</p>
<p>Power: 5</p>
            </td>
        </tr>
    </table>

<p></p>

<h3>🕹️ Rules and mechanics:</h3>

<b>Players:</b>

<input type="checkbox" id="players-item" />
<label for="players-item">The Computer must receive two characters to compete in the race in one object each</label>

<b>Pistas:</b>

<ul>
  <li><input type="checkbox" id="tracks-1-item" /> <label for="tracks-1-item">Characters will race on a random track for 5 rounds</label></li>
  <li><input type="checkbox" id="tracks-2-item" /> <label for="tracks-2-item">In each round, a block of the track will be drawn, which can be a straight, curve or confrontation</label>
    <ul>
      <li><input type="checkbox" id="tracks-2-1-item" /> <label for="tracks-2-1-item">If the track block is a STRAIGHT, the player must roll a 6-sided die and add the SPEED attribute, whoever wins gets a point</label></li>
      <li><input type="checkbox" id="tracks-2-2-item" /> <label for="tracks-2-2-item">If the track block is a CURVE, the player must roll a 6-sided die and add the MANEUVERABILITY attribute, whoever wins gets a point</label></li>
      <li><input type="checkbox" id="tracks-2-3-item" /> <label for="tracks-2-3-item">If the track block is a CONFRONTATION, the player must roll a 6-sided die and add the POWER attribute, whoever loses, loses a point</label></li>
      <li><input type="checkbox" id="tracks-2-3-item" /> <label for="tracks-2-3-item">No player can have a negative score (values below 0)</label></li>
    </ul>
  </li>
</ul>

<b>Victory condition:</b>

<input type="checkbox" id="victory-item" />
<label for="victory-item">In the end, whoever has accumulated the most points wins.</label>
