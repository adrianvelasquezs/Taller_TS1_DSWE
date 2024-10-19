import { Serie } from './serie.js';
import { series } from './data.js';

const tableBody: HTMLElement | null = document.getElementById("seriesTableBody")!;

if (tableBody) {
    series.forEach(serie => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = serie.id.toString();
        row.appendChild(idCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = serie.name;
        row.appendChild(nameCell);

        const channelCell = document.createElement("td");
        channelCell.textContent = serie.channel;
        row.appendChild(channelCell);

        const seasonsCell = document.createElement("td");
        seasonsCell.textContent = serie.seasons.toString();
        row.appendChild(seasonsCell);

        tableBody.appendChild(row);
    });
}
