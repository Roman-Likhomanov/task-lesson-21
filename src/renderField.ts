export function renderField(
  el: HTMLElement,
  field: boolean[][],
  cb: (...args: any[]) => void
) {
  el.innerHTML = `<table>
        <tbody>
        ${field
          .map(
            (row, y) =>
              `<tr>${row
                .map(
                  (cell, x) => `<td
                      class="cell cell--${cell ? "alive" : "dead"}"
                      data-x="${x}" data-y="${y}"
                      >
                      </td>`
                )
                .join("")}</tr>`
          )
          .join("")}
        </tbody>
        </table>`;
  const table = el.querySelector("table");
  if (!table) {
    return null;
  }

  table.addEventListener("click", (ev) => {
    const target = ev.target as HTMLTextAreaElement;

    if (!target.matches(".cell")) {
      return;
    }
    const x = Number(target.getAttribute("data-x"));
    const y = Number(target.getAttribute("data-y"));
    cb(x, y);
  });
}
