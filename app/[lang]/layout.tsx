import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { source } from '@/app/source';
import { I18nProvider } from "fumadocs-ui/i18n";
import { MenuTitle } from '@/ui/menu-title';
import Image from 'next/image';

export default function Layout({
  params,
  children,
}: {
  params: { lang: string };
  children: React.ReactNode;
}) {
  return (
           <I18nProvider 
           locale={params.lang}
            locales={[
    {
      name: 'English',
      locale: 'en',
    },
    {
      name: 'Português',
      locale: 'pt',
    },
  ]}
            translations={
              {
                en: {

                },
                pt: {
                  lastUpdate: "Última atualização",
                  searchNoResult: "Sem resultado",
                  tocNoHeadings: "Sem cabeçalhos",
                  chooseLanguage: "Escolha o idioma",
                  toc: "Nesta página",
                  search: "Procurar",
                  previousPage: "Anterior",
                  nextPage: "Próxima",
                },
              }[params.lang]
            }

              
        >

    <DocsLayout 
      tree={source.pageTree[params.lang]} 
    i18n
     githubUrl="https://github.com/mauriciorobertodev/lugo4php"
      nav={{
        transparentMode: "always",
        title: <MenuTitle/>,
        url: `/${params.lang}`,
        enabled: true,
        
      }}

      links={[
    {
      text: 'Lugo Bots',
      url: 'https://lugobots.ai',
      icon: <Image src="https://lugobots.ai/favicon.png" width={16} height={16} alt="Lugo Bots"/>,
    },
  ]}
      
    >
      {children}
    </DocsLayout>
        </I18nProvider>
  );
}
