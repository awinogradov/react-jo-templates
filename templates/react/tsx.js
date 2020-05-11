module.exports.template = (_, fileName) =>
`import React from 'react';

export interface ${fileName}Props {}

export const ${fileName}: React.FC<${fileName}Props> = props => <div></div>;
`;
