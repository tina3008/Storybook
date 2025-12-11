import React, { useEffect } from 'react';
import styles from './SidebarMenu.module.css';

export interface MenuItem {
  id: string;
  label: string;
  onClick?: () => void;
  children?: MenuItem[];
}

export const SidebarMenu: React.FC<{
  open: boolean;
  onClose: () => void;
  items: MenuItem[];
}> = ({ open, onClose, items }) => {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [open]);

  return (
    <>
      <div
        className={`${styles.backdrop} ${open ? styles.show : ''}`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <aside
        className={`${styles.panel} ${open ? styles.open : ''}`}
        aria-hidden={!open}
      >
        <nav>
          <ul className={styles.list}>
            {items.map(item => (
              <MenuNode key={item.id} item={item} onClose={onClose} />
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};


const MenuNode: React.FC<{ item: MenuItem; onClose: () => void }> = ({
  item,
  onClose,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <li className={styles.item}>
      <div className={styles.labelRow}>
        <button
          className={styles.link}
          onClick={() => {
            item.onClick?.();
            if (item.children) setExpanded(s => !s);
            else onClose(); // закрыть сайдбар при выборе пункта
          }}
        >
          {item.label}
        </button>

        {item.children && (
          <button
            aria-label={expanded ? 'Collapse' : 'Expand'}
            className={styles.chev}
            onClick={() => setExpanded(s => !s)}
          >
            {expanded ? 'yes' : 'no'}
          </button>
        )}
      </div>

      {item.children && expanded && (
        <ul className={styles.sublist}>
          {item.children.map(c => (
            <li key={c.id} className={styles.subitem}>
              <button
                className={styles.link}
                onClick={() => {
                  c.onClick?.();
                  onClose(); 
                }}
              >
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};