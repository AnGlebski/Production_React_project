import { classNames } from 'shared/lib/classNames/classNames';
import cls from '../Sidebar.module.scss'
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'widgets/assets/icons/about-20-20.svg';
import MainIcon from 'widgets/assets/icons/main-20-20.svg';
interface SidebarProps {
  className?: string;
};

export const Sidebar = ({className}: SidebarProps) => {
  
  const [collapsed, setCollapsed] = useState(false);
  const {t} = useTranslation();
  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div data-testid='sidebar'
      className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
      >
      <Button 
        data-testid='sidebar-toggle' 
        onClick={onToggle} 
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square>
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        <AppLink 
          className={cls.item}
          to={RoutePath.main} 
          theme={AppLinkTheme.SECONDARY} >
            <MainIcon 
              className={cls.icon}
            />
            <span className={cls.link}>{t('Главная')}</span>
        </AppLink>
        <AppLink 
          className={cls.item}
          to={RoutePath.about} 
          theme={AppLinkTheme.SECONDARY} >
            <AboutIcon 
              className={cls.icon}
            />
            <span className={cls.link}>{t('О сайте')}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher 
          short={collapsed}
          className={cls.lang}
        />
      </div>
    </div>
  );
};