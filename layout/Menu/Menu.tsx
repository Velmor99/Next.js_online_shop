import styles from './Menu.module.css';
import cn from 'classnames';
import { useContext, KeyboardEvent, useState } from 'react';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { firstLevelMenu } from '../../helpers/helpers';
import { motion } from 'framer-motion';
import axios from 'axios';
import {MenuItem} from '../../interfaces/menu.interface';
import { API } from '../../helpers/api';

export const Menu = (): JSX.Element => {
  const { menu, setMenu } = useContext(AppContext);
  const [currentActiveCategory, setCurrentActiveCategory] = useState('Courses');
  const router: NextRouter = useRouter();
  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: { marginBottom: 0 },
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 29,
    },
    hidden: { opacity: 0, height: 0 },
  };

  const firstLevelVariant = {
    visible: {
      opacity: 1,
      height: 'auto',
    },
    hidden: { opacity: 0, height: 0 },
  };

  const openFirstLevel = async (level: string) => {
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + API.topPage.find, {firstCategory: level});
    await setCurrentActiveCategory(level);
    setMenu && 
      setMenu(
        menu
      );
  };
  // console.log('menu', menu)

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCategory) {
            m.isOpened = !m.isOpened;
          }
          return m;
        })
      );
  };

  const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
    if (key.code === 'Enter' || key.code === 'Space') {
      key.preventDefault();
      openSecondLevel(secondCategory);
    }
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => (
          <div key={m.route}>
            <div onClick={() => openFirstLevel(m.route)}>
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: m.id === currentActiveCategory,
                  })}
                >
                  {m.icon}
                  <span>{m.name}</span>
                </div>
            </div>
            {m.id === currentActiveCategory && 
            <motion.div
              initial={m.route !== currentActiveCategory ? 'visible' : 'hidden'}
              animate={m.route ===currentActiveCategory ? 'visible' : 'hidden'}
              variants={firstLevelVariant}
            >
              {buildSecondLevel(m)}
            </motion.div>
            }
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <>
        <div className={styles.secondBlock}>
          {menu &&
            menu.map((m) => {
              if (m.pages.map((p) => p.title).includes(router.asPath.split('/')[2])) {
                m.isOpened = true;
              }
              return (
                <div key={m._id.secondCategory}>
                  <div
                    tabIndex={0}
                    onKeyDown={(key: KeyboardEvent) => openSecondLevelKey(key, m._id.secondCategory)}
                    className={styles.secondLevel}
                    onClick={() => openSecondLevel(m._id.secondCategory)}
                  >
                    {m._id.secondCategory}
                  </div>
                  <motion.div
                    initial={m.isOpened ? 'visible' : 'hidden'}
                    animate={m.isOpened ? 'visible' : 'hidden'}
                    variants={variants}
                    layout
                    className={cn(styles.secondLevelBlock)}
                  >
                    {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
                  </motion.div>
                </div>
              );
            })}
        </div>
      </>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
    return pages.map((page) => (
      <motion.div key={page._id} variants={variantsChildren}>
        <Link href={`/${route}/${page.alias}`}
        tabIndex={isOpened ? 0 : -1}
        className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: `/${route}/${page.alias}` === router.asPath,
        })}
        >
            {page.alias}
        </Link>
      </motion.div>
    ));
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
