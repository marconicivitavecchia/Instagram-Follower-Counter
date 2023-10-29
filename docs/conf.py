# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'Instagram Follower Counter'
copyright = '2023, IIS G. Marconi - 5Cinf'
author = 'IIS G. Marconi - 5Cinf'
release = '0.0.1'


# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration
from xanadu_sphinx_theme import templates_dir

extensions = [
    "sphinx.ext.autodoc",
    "sphinx.ext.autosummary",
    "sphinx.ext.todo",
    "sphinx.ext.coverage",
    "sphinx.ext.mathjax",
    "sphinx.ext.napoleon",
    "sphinx.ext.inheritance_diagram",
    "sphinx.ext.viewcode",
    "sphinx.ext.intersphinx",
    "m2r2"
]

templates_path = [templates_dir()]
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

language = 'it'

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = "xanadu"
html_static_path = ['_static']

# Add Xanadu Sphinx Theme autosummary templates


html_theme_options = {
    "navbar_name": "Instagram Follower Counter",
    "navbar_logo_path": "_static/logo_marconi.png",

    "navbar_home_link": "https://instagram-follower-counter.readthedocs.io/",

    "github_repo": "marconicivitavecchia/Instagram-Follower-Counter",
    "navbar_left_links": [
        {
            "name": "Documentazione",
            "href": "index.html",
            "active": True,
        }
    ],

    "navbar_right_links": [
        {
            "name": "GitHub",
            "href": "https://github.com/marconicivitavecchia/Instagram-Follower-Counter",
            "icon": "fab fa-github",
        }
    ],

    "footer_links": [
        {}
    ],

    "footer_about": {
    "title": "About",
    "icon": "_static/logo_marconi.png",
    "href": "",
    "description": "Siete ossessionati dal sapere ogni secondo di quanto cresce o decresce il tuo profilo Instagram? Questo progetto si basa proprio sulla creazione di un oggetto con un contatore interno che puoi mettere dove vuoi per tenere d'occhio i tuoi follower!"
    },

    "footer_social_icons": [
        {
            "name": "Instagram",
            "icon": "fab fa-instagram",
            "href": "https://github.com/marconicivitavecchia/Instagram-Follower-Counter"
        },
        {
            "name": "GitHub",
            "icon": "fab fa-github",
            "href": "https://github.com/marconicivitavecchia/Instagram-Follower-Counter"
        },
    ],

    "footer_taglines": [
        {}
    ],

    

    # "extra_copyrights": [
    #     "TensorFlow, the TensorFlow logo, and any related marks are "
    #     "trademarks of Google Inc."
    # ],

    # "google_analytics_tracking_id": "UA-116279123-2",

    "prev_next_button_colour": "#b13a59",
    "prev_next_button_hover_colour": "#712b3d",
    "toc_marker_colour": "#b13a59",
    "table_header_background_colour": "#ffdce5",
    "border_colour": "#b13a59",
    "text_accent_colour": "#b13a59",
    "toc_mobile_heading_colour": "#ec407a",
    "toc_mobile_heading_background_colour": "#fcd9e5",
    "toc_overview": True,
    "toc_subset": True,
    "toc_global": True,
}