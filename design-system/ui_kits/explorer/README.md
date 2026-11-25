# Explorer UI Kit

Click-through recreation of the Explorer-facing surfaces described in the attached research bundle's `page-inventory.yaml` (layers: discovery landing, Journey Compass, Experience Information, Journeys list, Journey Day). Mobile-first per JP-024, with a Desktop toggle on Journeys/Journey Day to show an intentionally distinct desktop composition (not a stretched mobile layout).

Screens deliberately **not** built as a locked "Station View / Inspector / Details View" three-surface model — per the project's own verification notes that model is candidate material only. This kit instead ships the Journey Day as one coordinated timeline + side panel, which is compatible with (but does not commit to) that future direction.

Files: `index.html` (shell + navigation), `PhoneFrame.jsx`, `DiscoveryLanding.jsx`, `JourneyCompass.jsx`, `ExperienceDetail.jsx`, `JourneysList.jsx`, `JourneyDay.jsx`.
