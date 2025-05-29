// Assuming clang-llvm-lld.js WASM module is loaded and provides these C functions:
// 'run_lexer', 'run_ast', 'run_ir', 'run_optimized_ir', 'run_codegen'

let Module;

window.onload = () => {
  loadWASM();
};

function loadWASM() {
  createClangModule().then(mod => {
    Module = mod;
    console.log("✅ WASM module loaded");

    // Wrap exported C functions for JS use
    window.runLexer = Module.cwrap('run_lexer', 'string', ['string']);
    window.runAST = Module.cwrap('run_ast', 'string', ['string']);
    window.runIR = Module.cwrap('run_ir', 'string', ['string']);
    window.runOptimizedIR = Module.cwrap('run_optimized_ir', 'string', ['string']);
    window.runCodegen = Module.cwrap('run_codegen', 'string', ['string']);
  });
}

function getCode() {
  return document.getElementById('codeInput').value;
}

function compileLexer() {
  runStage(runLexer, getCode(), 'output', 'Lexer');
}

function compileAST() {
  runStage(runAST, getCode(), 'output', 'AST');
}

function compileIR() {
  runStage(runIR, getCode(), 'output', 'IR');
}

function compileOptimizedIR() {
  const ir = runIR(getCode());
  runStage(() => runOptimizedIR(ir), '', 'output', 'Optimized IR');
}

function compileCodegen() {
  const ir = runIR(getCode());
  const optimized = runOptimizedIR(ir);
  runStage(() => runCodegen(optimized), '', 'outputWASM', 'Codegen');
}

function runStage(fn, code, outputId, label) {
  const start = performance.now();
  const result = code ? fn(code) : fn();
  const time = performance.now() - start;

  if (outputId) document.getElementById(outputId).textContent = result;
  showStats(label, time, !result.toLowerCase().includes('error'));
}

function showStats(stage, timeMs, success) {
  document.getElementById('status').textContent = `Status: ${success ? '✅ Success' : '❌ Error'}`;
  document.getElementById('performance').textContent = `Time: ${timeMs.toFixed(2)} ms`;
  document.getElementById('successRate').textContent = `Success Rate: ${success ? '100%' : '0%'}`;
  document.getElementById('timeComplexity').textContent = 'Time Complexity: O(n)';  // example placeholder
  document.getElementById('spaceComplexity').textContent = 'Space Complexity: O(n)'; // example placeholder
}

function toggleTheme() {
  const body = document.body;
  const isLight = body.classList.toggle('light-theme');

  if (isLight) {
    body.style.backgroundColor = '#f0f0f0';
    body.style.color = '#000';
  } else {
    body.style.backgroundColor = '#121212';
    body.style.color = '#e0e0e0';
  }
}
