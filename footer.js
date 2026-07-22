// Shared site footer — edit this file to update the footer on every page at once.
(function () {
  var footerHTML = `
  <footer>
    <div class="footer-top">
      <div class="footer-brand">
        <a href="index.html" class="nav-logo">
          <img src="images/TreeTop BS Logo-horiz - bc.png" alt="Treetop Business Solutions" class="nav-logo-img" />
        </a>
        <p>Your one-stop-shop for bookkeeping, tax preparation, consulting, and branding. Based in Oklahoma City. Another branch of your business.</p>
      </div>
      <div class="footer-col">
        <h4 class="footer-col-label" style="color: var(--gold);">Navigation</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="solutions.html">Solutions</a></li>
          <li><a href="get-started.html">Get Started</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4 class="footer-col-label" style="color: var(--gold);">Services</h4>
        <ul>
          <li><a href="solutions.html">Bookkeeping</a></li>
          <li><a href="solutions.html">Tax Preparation</a></li>
          <li><a href="solutions.html">Consulting</a></li>
          <li><a href="solutions.html">Sales Tax</a></li>
          <li><a href="solutions.html">Web &amp; Branding</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4 class="footer-col-label" style="color: var(--gold);">Contact</h4>
        <address>
          <span>Oklahoma City, OK 73142</span>
          <a href="tel:4055099330">(405) 509-9330</a>
          <a href="mailto:info@treetopbusiness.com">info@treetopbusiness.com</a>
        </address>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Treetop Business Solutions is not a licensed CPA firm but is affiliated with Goss CPA, PLLC, a licensed Oklahoma CPA firm. Treetop Business Solutions, LLC is fully insured. &copy; <span id="footer-copy-year"></span> TREETOP BUSINESS SOLUTIONS, LLC.</p>
      <p style="text-align: right;">Created by <a href="branding.html">Treetop Business Solutions</a></p>
    </div>
  </footer>`;

  function insertFooter() {
    var placeholder = document.getElementById('site-footer');
    if (placeholder) {
      placeholder.outerHTML = footerHTML;
      var yearSpan = document.getElementById('footer-copy-year');
      if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertFooter);
  } else {
    insertFooter();
  }
})();
