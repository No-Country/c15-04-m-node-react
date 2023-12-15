import React, { ComponentType, ReactNode } from "react";

import LoadingScreen from "./LoadinScreen/LoadinScreen";

const Loadable = <P extends object>(Component: ComponentType<P>) => {
	return (props: P): ReactNode => (
		<React.Suspense fallback={<LoadingScreen />}>
			<Component {...props} />
		</React.Suspense>
	);
};

export default Loadable;
