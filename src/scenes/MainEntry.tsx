/**
 * MainEntry.tsx
 * @author HU JIAJUN <e0556371@u.nus.edu>
 * @file Entry point for Main Scene
 */

import { useMainEntry as useStyles } from 'styles/main';

export function MainEntry() {
  const styles = useStyles();
  return <div className={styles.container}>Main</div>;
}
