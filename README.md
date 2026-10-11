# CE2407A Tutorial 1

Nine web slides for Tutorial 1, Week 9.

1. Tutorial 1
2. Q1: Original question statement
3. Q1: Highway routes and travel times
4. Q2: Original question statement
5. Q2: Wind speed and direction
6. Q3: Original question statement
7. Q3: Power plant reliability
8. Q5: Original question statement
9. Q5: Pavement performance

## Present

Open [the presentation](https://jiaruilei.github.io/CE2407A-Tutorial1-Slides/). Use the arrow keys or bottom buttons to change slides. Press O for overview and F for full screen. When a question has keyboard focus, use the bottom buttons to change slides.

The top question menu jumps directly to **Question** or **Explore** for Q1, Q2, Q3 and Q5. Its active item follows arrow navigation and browser history. **Open exercise** opens the current question in the responsive tutorial in a new tab, with normal-sized controls on phones. These study controls stay outside the scaled slides.

Phones retain the same slide layout and navigation. Rotate to landscape for larger text, or use **View larger** on a question statement to open its image viewer. Drag or scroll to pan, use the zoom buttons or select **Fit width**, then **Close** to return. The viewer preserves all crop proportions and leaves slide annotations intact. Reveal's automatic mobile scroll view is disabled because it reparents slides and breaks this deck's fixed layout and annotation surfaces.

Full screen uses the browser's standard or WebKit fullscreen API when available. If the browser does not support or allow it, **Expand view** uses the available browser window with compact controls. Select **Exit view** to return. On wide screens the controls move beside the slide to leave its full height available. The browser may keep its address bar visible. This mode does not claim to bypass that browser restriction.

Interactive slides use a larger panel with a compact heading. **Enlarge exercise** fills the slide, and **Back to slide** restores its layout. **More → Reset exercise** reloads only that exercise and clears its answers and chat. Leaving a slide preserves its calculations and chat.

The live questions need an internet connection. They embed [CE2407A_Tutorial1](https://github.com/jiaruilei/CE2407A_Tutorial1) through its GitHub Pages site, with `question=q1` (or q2, q3, q5) and `embed=1`. The original tutorial handles MathJax and its Render-hosted AI chat. No API keys belong in this repository.

## Annotate

Select **Ink** in the bottom controls to open the annotation toolbar. Use Pen or Highlighter with a classroom pen, mouse or touch input. Choose a color and thickness. Eraser removes a whole stroke. Undo, Redo and Clear ink apply to the current slide view. Clearing is undoable.

Choose **Pointer** or press Escape to interact with the question. Ink drawn over the embedded question follows its main page as you scroll. Scrolling inside the chat or other nested panels, and opening content that changes the layout, does not reposition existing ink. Normal and expanded layouts keep separate ink because the question reflows when expanded. Full screen and window resizing preserve alignment. Ink remains visible when the toolbar is closed.

Ink is saved automatically in this browser on this device. It is not synced to GitHub or other computers. Use one presentation tab when annotating the same slide. If browser storage is unavailable, ink remains available while the tab stays open. Ctrl+Z undoes ink and Ctrl+Y (or Ctrl+Shift+Z) redoes it while the toolbar is open. Text fields retain normal editing shortcuts.

The pen must send normal pen, mouse or touch input to the browser. This feature does not capture webcam video or require camera permission. Test the classroom device before teaching.

Run `npm test` with Node.js to check annotation history, storage validation, coordinate scaling and stroke erasing.

## Design and assets

The 1280 × 720 layout, navy and orange palette, Arial type, embedded webpage panels and navigation follow [CE2134-TTG-Workshop](https://github.com/jiaruilei/CE2134-TTG-Workshop), as requested. The cover QR code links to the first slide and includes a four-module quiet zone. Reveal.js is bundled with its license in `LICENSE-reveal.txt`.

Question statements and diagrams are cropped from the supplied `CE2407A Tutorial Questions Set 1.pdf` (pages 1–3). Every crop is rendered at 288 dpi and displayed at 2 CSS pixels per PDF point, preserving the same scale across all four questions. Q2 combines material from pages 1 and 2. Cropped parts are arranged to fit one slide without changing their individual scale.

Statement slides use stable IDs `question-1`, `question-2`, `question-3` and `question-5`. Existing cover and interactive slide IDs remain unchanged so saved annotations and direct links still refer to the same content.

## Publish

GitHub Pages serves the repository root from the main branch. No build step is required. Edit `index.html`, `styles.css` or `presentation.js` and push to main to update the slides.
