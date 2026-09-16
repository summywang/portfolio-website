import { createContext, useContext, useEffect, useState, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faXmark, faArrowUpRightFromSquare, type IconDefinition } from '@fortawesome/free-solid-svg-icons';

type Theme = 'light' | 'dark';
const ThemeContext = createContext<{ theme: Theme; setTheme: (theme: Theme) => void }>({ theme: 'light', setTheme: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#000000' : '#ffffff');
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* Theme still works when storage is unavailable. */ }
  }, [theme]);
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function IconButton({ icon, label, className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { icon: IconDefinition; label: string }) {
  return <button type="button" className={`glass icon-button ${className}`} aria-label={label} title={label} {...props}>
    <FontAwesomeIcon icon={icon} aria-hidden="true" />
  </button>;
}

export function ThemeSwitch() {
  const { theme, setTheme } = useContext(ThemeContext);
  return <div className="glass theme-switch" role="group" aria-label="色彩主題">
    <button type="button" aria-label="淺色主題" aria-pressed={theme === 'light'} onClick={() => setTheme('light')}><FontAwesomeIcon icon={faSun} aria-hidden="true" /></button>
    <button type="button" aria-label="深色主題" aria-pressed={theme === 'dark'} onClick={() => setTheme('dark')}><FontAwesomeIcon icon={faMoon} aria-hidden="true" /></button>
  </div>;
}

export function Toolbar({ onClose }: { onClose?: () => void }) {
  return <header className="toolbar"><div className="toolbar-inner"><ThemeSwitch />
    {onClose && <IconButton icon={faXmark} label="關閉案例，返回作品" onClick={onClose} />}
  </div></header>;
}

export function StatusBadge({ english = false }: { english?: boolean }) {
  return <span className="glass status-badge"><span className="status-dot" aria-hidden="true" />{english ? 'Shipped' : '已發布'}</span>;
}

export function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return <a className="glass link-pill" href={href} target="_blank" rel="noreferrer">{children}<FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" /><span className="sr-only">（在新分頁開啟）</span></a>;
}
