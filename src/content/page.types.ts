import type { HTMLAttributes } from "astro/types";
import type { IconProps } from "react-feather";


export interface LinkButtonI {

  label?: string;
  mode?: "outline" | "solid";
  disabled?: boolean;
  icon?: IconProps["name"];
  color?: string;
  addClasses?: string;
}

export type LinkButton = HTMLAttributes<'a'> & LinkButtonI;

export interface PageSection {
  title: string;
  title_size?: string;
  content: string;
  buttons: LinkButton[] & { length: 0 | 1 | 2};
  image: string;
  image_position?: "top" | "bottom" | "left" | "right";
};


export interface PageConfig {
  document_title?: string;
  /**
   * Applies to some meta tags related to SEO and Social Sharing
   * - og:title
   * - twitter:title
   *
   * Falls back to the `document_title` if not provided
   */
  meta_title?: string;
  /**
   * Applies to some meta tags
   * - description
   * - og:description
   * - twitter:description
   */
  meta_description?: string;
  /**
   * Applies to the <meta name="keywords"> tag
   */
  meta_keywords?: string[];

  /**
   * Applies to the <meta name="author"> tag
   */
  meta_author?: string;

  /**
   * Applies to the <link rel="canonical"> tag
   */
  canonical_url?: string;
  /**
   * Applies to the <meta name="robots"> tag.
   * If true, it will add the 'noindex, nofollow' value.
   * If false, it will add the 'index, follow' value.
   */
  noindex?: boolean;
  /**
   * Applies to the og:image and twitter:image meta tags
   */
  meta_image?: string;
}




export interface PageCommonProps {
  /**
   * Page title displayed on the <PageHeader> component
   */
  title: string;
  /**
   * Page description displayed on the <PageHeader> component
   */
  description?: string;
  // Limited to 4 buttons
  buttons?: LinkButton[] & { length: 0 | 1 | 2 | 3 | 4 };
  sections?: PageSection[];
}

export type PageType<data_type = any> = PageCommonProps &
  PageConfig & { data: data_type };
