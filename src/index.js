import dva from 'dva';
import { registerModels } from './models';
import router from './routes/index.jsx';

import 'antd/dist/antd.min.css';
import './assets/scss/index.scss';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({})

// 3. Model
registerModels(app);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');
