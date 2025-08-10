import { Slide, ToastContainer } from 'react-toastify';

export default function AppToast() {
	return (
		<ToastContainer
			position="bottom-right"
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop
			closeOnClick={false}
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="dark"
			transition={Slide}
		/>
	);
}
