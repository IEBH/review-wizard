export const picotGrammar = `<h3>Participants</h3>
<ul>
    <li>We included: {{#each population}} {{#ifValue inclusion '===' true}} {{main}} {{/ifValue}} {{/each}}</li>
    <li>We excluded: {{#each population}} {{#ifValue inclusion '===' false}} {{main}} {{/ifValue}} {{/each}}</li>
</ul>

<h3>Interventions</h3>
<ul>
<li>We included: {{#each intervention}} {{#ifValue inclusion '===' true}} {{main}} {{/ifValue}} {{/each}}</li>
<li>We excluded: {{#each intervention}} {{#ifValue inclusion '===' false}} {{main}} {{/ifValue}} {{/each}}</li>
</ul>

<h3>Comparators</h3>
<ul>
<li>We included: {{#each comparator}} {{#ifValue inclusion '===' true}} {{main}} {{/ifValue}} {{/each}}</li>
<li>We excluded: {{#each comparator}} {{#ifValue inclusion '===' false}} {{main}} {{/ifValue}} {{/each}}</li>
</ul>

<h3>Outcomes</h3>
<ul>
    <<li>We included: {{#each outcomes}} {{#ifValue inclusion '===' true}} {{main}} {{/ifValue}} {{/each}}</li>
    <li>We excluded: {{#each outcomes}} {{#ifValue inclusion '===' false}} {{main}} {{/ifValue}} {{/each}}</li>
</ul>

<h3>Study design</h3>
<ul>
    <li>We included: {{types}}</li>
</ul>`;
