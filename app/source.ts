import { docs, meta } from '@/.source';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import { createElement } from 'react';
import { i18n } from '@/i18n';

import * as gi from 'react-icons/gi';
import * as lu from 'react-icons/lu';
import * as pi from 'react-icons/pi';
import * as si from 'react-icons/si';
import * as tb from 'react-icons/tb';
import * as ri from 'react-icons/ri';
import * as fi from 'react-icons/fi';
import * as fa from 'react-icons/fa6';
import * as md from 'react-icons/md';
import { LocalIcons } from '@/svgs';

export const icons: Record<string, string> = Object.assign(
    {},
    gi,
    lu,
    pi,
    si,
    tb,
    ri,
    fi,
    fa,
    md,
    gi,
    LocalIcons,
);

export const source = loader({
    i18n: i18n,
    baseUrl: '/',
    source: createMDXSource(docs, meta),
    icon(icon) {
        if (!icon) {
            // You may set a default icon
            return;
        }

        if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
    },
});
