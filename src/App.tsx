import AppRoutes from './routes'
import { IntlProvider } from 'react-intl'
import en from '../src/language/en.json'
import ms from '../src/language/ms.json'
import { Provider } from 'react-redux'
import store, { persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const messages = {
    en: en,
    ms: ms,
}

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <IntlProvider locale="en" messages={messages.en}>
                    <AppRoutes />
                </IntlProvider>
            </PersistGate>
        </Provider>
    )
}

export default App
