import dva from 'dva';
import { registerModels } from './models';
import router from './routes/index.jsx';
import 'antd/es/button/style/index.css'

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
registerModels(app)

// 4. Router
app.router(router);

// 5. Start
app.start('#root');
