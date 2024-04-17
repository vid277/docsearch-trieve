import React from 'react';
import { DocSearch } from '@docsearch/react';

import './app.css';
import '@docsearch/css';

function App() {

  const config = {
    tRDataset: "242051c0-a8a0-4259-9020-2dfdf75fa76a",
    apiKey: "tr-EqLS9P9luokYIE2ZtW2enUAB0DOuS4By",
    organizationId: "249a87fe-c91f-4b50-9bf0-78dd259b2e30"
  };

  return (
    <div>
      <h1>DocSearch v3 - React</h1>
      <DocSearch
        trieve_config={config}
        trieve_dataset="242051c0-a8a0-4259-9020-2dfdf75fa76a"

        indexName="docsearch"
        appId="R2IYF7ETH7"
        apiKey="599cec31baffa4868cae4e79f180729b"
        insights
      />
    </div>
  );
}

export default App;
