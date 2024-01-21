import {Provider} from "react-redux";
// Store
import store from "./store.js";

import {Routes, Route} from "react-router-dom"

// Components
import Roadmap from './pages/roadmap/roadmap'
import FeedbackEdit from './pages/feedback-edit/feedback-edit'
import FeedbackNew from './pages/feedback-new/feedback-new'
import SuggestionPage from "./pages/suggestion-page/sugesstion-page.jsx";
import FeedbackDetailPage from "./pages/feedback-detail-page/feedback-detail-page.jsx";

import AppContainer from "./components/app-container/app-container.jsx";

function App() {
    return (
        <Provider store={store}>
            <AppContainer>
                <Routes>
                    <Route path='product-feedback-app' element={<SuggestionPage/>}/>
                    <Route path='product-feedback-app/new' element={<FeedbackNew/>}/>
                    <Route path='product-feedback-app/edit' element={<FeedbackEdit/>}/>
                    <Route path='product-feedback-app/detail/:id' element={<FeedbackDetailPage/>}/>
                    <Route path='product-feedback-app/roadmap' element={<Roadmap/>}/>
                </Routes>
            </AppContainer>
        </Provider>

    )
}

export default App
