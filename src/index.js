import dva from 'dva';
import { createBrowserHistory  } from 'history';
import './index.css';
import 'antd/dist/antd.less';
import 'ant-design-pro/dist/ant-design-pro.css';

// 1. Initialize
const app = dva({
    history: createBrowserHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/model-weeklyList').default);
// app.model(require('./models/model-layOut').default);

// 4. Router
app.router(require('./router/index').default);

// 5. Start
app.start('#root');
