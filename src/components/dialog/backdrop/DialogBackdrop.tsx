import { memo } from 'react';

import styles from './DialogBackdrop.module.scss';

function DialogBackdrop() {
	return <div className={styles.backdrop}></div>;
}

export default memo(DialogBackdrop);
