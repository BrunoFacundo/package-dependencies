(function() {
    const input = document.querySelector("#input");
    const output = document.querySelector("#output");

    const getDependencies = () => {
        const packageJson = JSON.parse(input.value);
        let result = "";

        if (packageJson.dependencies) {
            let dependencies = Object.keys(packageJson.dependencies)
                .map(name => name)
                .join(" ");
            result += `yarn add ${dependencies}`;
        }

        result += "\n\n";

        if (packageJson.devDependencies) {
            let devDependencies = Object.keys(packageJson.devDependencies)
                .map(name => name)
                .join(" ");
            result += `yarn add -D ${devDependencies}`;
        }

        output.value = result;
    };

    input.onchange = getDependencies;
    input.onkeyup = e => {
        if (e.keyCode != 13) return;
        getDependencies();
    };
})();
