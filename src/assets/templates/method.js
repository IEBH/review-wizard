export const picotGrammar = `<h3>Participants</h3>
<ul>
    <li>We included: {{filterArray population 'inclusion' 'main'}}</li>
    <li>We excluded: {{notFilterArray population 'inclusion' 'main'}}</li>
</ul>

<h3>Interventions</h3>
<ul>
    <li>We included: {{filterArray intervention 'inclusion' 'main'}}</li>
    <li>We excluded: {{notFilterArray intervention 'inclusion' 'main'}}</li>
</ul>

<h3>Comparators</h3>
<ul>
    <li>We included: {{filterArray comparator 'inclusion' 'main'}}</li>
    <li>We excluded: {{notFilterArray comparator 'inclusion' 'main'}}</li>
</ul>

<h3>Outcomes</h3>
<ul>
    <li>We included: {{filterArray outcomes 'inclusion' 'main'}}</li>
    <li>We excluded: {{notFilterArray outcomes 'inclusion' 'main'}}</li>
</ul>

<h3>Study design</h3>
<ul>
    <li>We included: {{formatArray types}}</li>
</ul>`;
