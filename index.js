import { CommandLine } from "/js/CLI.js";

document.addEventListener("DOMContentLoaded", (event) => {
    const bash = new CommandLine(false, document.getElementById("container"))

    const commandInput = document.getElementById("commandInput")
    commandInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            bash.execute(commandInput.value);
            commandInput.value = "";
        }
    })
})

// Bastante basico